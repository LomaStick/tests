import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';

// Интерфейс, описывающий параметр (свойство) товара
interface Param {
  id: number; // Уникальный идентификатор параметра
  name: string; // Название параметра (например, "Длина", "Цвет")
  type?: 'string'; // Тип параметра (по умолчанию - текстовый, можно расширить для других типов)
}

// Интерфейс, описывающий значение параметра для конкретного товара
interface ParamValue {
  paramId: number; // ID параметра, к которому относится значение
  value: string; // Само значение параметра (например, "макси", "красный")
}

// Интерфейс, описывающий цвет
interface Color {
  name: string; // Название цвета (например, "Красный")
  hex: string; // HEX-код цвета (например, "#FF0000")
}

// Интерфейс, описывающий модель (товар)
interface Model {
  id: number; // Уникальный ID для каждой модели
  paramValues: ParamValue[]; // Массив значений параметров для данного товара
  colors: Color[]; // Массив цветов, связанных с этим товаром
}

// Интерфейс, описывающий входные параметры (props) компонента ParamEditor
interface Props {
  params: Param[]; // Массив доступных параметров для редактирования
  model: Model; // Модель (товар), значения параметров которого нужно отобразить и редактировать
  onModelChange: (model: Model) => void; // Колбэк для оповещения родительского компонента об изменении модели
}

// Интерфейс, описывающий состояние (state) компонента ParamEditor
interface State {
  paramValues: { [paramId: number]: string }; // Объект, где ключ - ID параметра, а значение - введенное значение
}

// ParamEditor - компонент для редактирования параметров модели.
// Используем forwardRef для возможности передачи ref от родительского компонента
// и useImperativeHandle для управления тем, какие методы компонента будут доступны через ref.
const ParamEditor = forwardRef<any, Props>((props, ref) => {

  const [state, setState] = useState<State>({
    paramValues: initializeParamValues(props.params, props.model),
  });

  useEffect(() => {
    setState({
      paramValues: initializeParamValues(props.params, props.model),
    });
  }, [props.params, props.model]);

  function initializeParamValues(params: Param[], model: Model): { [paramId: number]: string } {
    const initialParamValues: { [paramId: number]: string } = {};
    params.forEach(param => {
      const paramValue = model.paramValues.find(pv => pv.paramId === param.id);
      initialParamValues[param.id] = paramValue ? paramValue.value : "";
    });
    return initialParamValues;
  }

  useImperativeHandle(ref, () => ({
    getModel: (): Model => {
      const paramValues: ParamValue[] = props.params.map(param => {
        return {
          paramId: param.id,
          value: state.paramValues[param.id] || "",
        };
      });

      return {
        id: props.model.id,
        paramValues: paramValues,
        colors: props.model.colors,
      };
    }
  }), [props.params, state, props.model]);

  const handleInputChange = (paramId: number, value: string) => {
    setState(prevState => {
      const updatedParamValues = {
        ...prevState.paramValues,
        [paramId]: value,
      };

      const updatedModel: Model = {
        id: props.model.id,
        paramValues: props.params.map(param => ({
          paramId: param.id,
          value: updatedParamValues[param.id] || "",
        })),
        colors: props.model.colors,
      };

      props.onModelChange(updatedModel);
      return { paramValues: updatedParamValues };
    });
  };

  return (
    <>
      {props.params.map(param => (
        <div key={param.id}>
          <label htmlFor={`param-${param.id}`}>{param.name}:</label>
          <input
            type="text"
            id={`param-${param.id}`}
            value={state.paramValues[param.id] || ""}
            onChange={(e) => handleInputChange(param.id, e.target.value)}
          />
        </div>
      ))}
    </>
  );
});

// Пример использования:

interface AppState {
  models: Model[]; // Массив моделей (товаров), отображаемых в приложении
  params: Param[];  // Массив параметров
}

const App: React.FC = () => {
  // Начальные значения параметров
  const initialParams: Param[] = [
    {
      id: 1,
      name: "Назначение"
    },
    {
      id: 2,
      name: "Длина"
    }
  ];

  // Начальные модели
  const [models, setModels] = useState<Model[]>([
    {
      id: 1,
      paramValues: [
        {
          paramId: 1,
          value: "повседневное"
        },
        {
          paramId: 2,
          value: "макси"
        }
      ],
      colors: []
    },
    {
      id: 2,
      paramValues: [
        {
          paramId: 1,
          value: "вечернее"
        },
        {
          paramId: 2,
          value: "мини"
        }
      ],
      colors: []
    },
  ]);
  const [params, setParams] = useState<Param[]>(initialParams);

  const [nextModelId, setNextModelId] = useState<number>(3); // инициализация nextModelId

  // Обработчик изменения модели
  const handleModelChange = (modelId: number, updatedModel: Model) => {
    setModels(prevModels =>
      prevModels.map(m => (m.id === modelId ? updatedModel : m))
    );
  };

  const handleAddModel = () => {
    const newModel: Model = {
      id: nextModelId,
      paramValues: [], // инициализация with empty paramValues
      colors: [],
    };
    setModels([...models, newModel]);
    setNextModelId(nextModelId + 1); // Increment nextModelId
  };

	return (
		<div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
				<h1 style={{ color: '#333', marginBottom: '20px' }}>Редактор параметров моделей</h1>
				<button
						onClick={handleAddModel}
						style={{
								backgroundColor: '#4CAF50',
								color: 'white',
								padding: '10px 15px',
								border: 'none',
								borderRadius: '4px',
								cursor: 'pointer',
								marginBottom: '20px'
						}}
				>
						Добавить модель
				</button>
				{models.map(model => (
						<div key={model.id} style={{ border: '1px solid #eee', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
								<h2 style={{ color: '#555', marginBottom: '10px' }}>Модель {model.id}</h2>
								{/* Используем ParamEditor, передаем params, model и onModelChange */}
								<ParamEditor
										params={params}
										model={model}
										onModelChange={(updatedModel) => handleModelChange(model.id, updatedModel)}
								/>
								<p style={{ fontSize: '0.8em', color: '#777' }}>Модель: {JSON.stringify(model)}</p> {/* Отображаем текущую модель в JSON-формате */}
						</div>
				))}
		</div>
);
};

export default App;

/*
 ИНСТРУКЦИЯ ПО ЗАПУСКУ И ПРОВЕРКЕ КОДА:

 1.  Создайте новый React-проект (если у вас его еще нет):
 npx create-react-app my-app
 cd my-app

 2.  Замените содержимое файла src/App.tsx (или src/App.js, если вы не используете TypeScript) на код, представленный выше.

 3.  Установите необходимые зависимости TypeScript (если вы их еще не установили):
 npm install typescript @types/node @types/react @types/react-dom --save-dev
 или
 yarn add typescript @types/node @types/react @types/react-dom --dev

 4.  Запустите React-приложение:
 npm start
 или
 yarn start

 5.  Откройте приложение в браузере (обычно по адресу http://localhost:3000).

 КАК ПРОВЕРИТЬ:

 1.  Убедитесь, что отображаются разделы для каждой модели (в данном случае, для двух моделей).
 2.  Убедитесь, что в каждом разделе отображаются поля ввода для параметров "Назначение" и "Длина".
 3.  Убедитесь, что появилась кнопка "Добавить модель".
 4.  Нажмите кнопку "Добавить модель".  Должен появиться новый раздел для новой модели.
 5.  Внесите изменения в поля ввода в одном из разделов.
 6.  Убедитесь, что изменяется только модель, параметры которой вы редактировали.
 7.  Проверьте, что значения, отображаемые в строке "Модель: {JSON.stringify(model)}" обновляются при изменении значений в полях ввода.
 8.  Проверьте консоль браузера на наличие ошибок.
 */
