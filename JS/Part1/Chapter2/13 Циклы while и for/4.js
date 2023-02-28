let i
  , n
  , divisor;

n = prompt("Введите диапозон n", '')

next:
for (i = 2; i <= n; i++) {
  divisor = 2;
  while (divisor < i) {
    if (i % divisor == 0) {
      continue next;
    }
    divisor++;
  }
  alert(`Просто число: ${i}`);
}
