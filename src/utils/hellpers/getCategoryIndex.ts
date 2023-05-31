export const getCategoryIndex = (title: string): number | undefined => {
  if (title === 'Смартфон') {
    return 1
  } else if (title === 'Планшет') {
    return 2
  } else if (title === 'Ноутбук') {
    return 3
  } else if (title === 'Смарт Часы') {
    return 4
  }
}
