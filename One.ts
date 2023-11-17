function wrapping(gifts: string[]): string[] {
  return gifts.map((gif) => {
    const embed = "*".repeat(gif.length + 2);
    return `${embed}\n*${gif}*\n${embed}`;
  });
}
