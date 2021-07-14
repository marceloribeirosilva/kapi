export default class FormatTitles {
  static FirstLetterWordUppercase(title: string): string {
    let newText = '';

    const textSplit = title.split(' ');

    for (let i = 0; i < textSplit.length; i += 1) {
      const wordLowerCase = textSplit[i].toLowerCase();
      if (textSplit[i].length === 1 && i !== 0) {
        newText += ` ${wordLowerCase}`;
      } else {
        const wordModified = wordLowerCase.replace(wordLowerCase[0], a => {
          return a.toUpperCase();
        });

        newText += i === 0 ? wordModified : ` ${wordModified}`;
      }
    }

    return newText;
  }
}
