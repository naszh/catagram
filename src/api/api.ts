export const api: string = 'https://api.api-ninjas.com/v1/cats';

export const X_API_KEY: string = 'NpP4RAIs1no62j7ml9jr3Q==jSW9mKwLqEp6tSjc';

//added an optional but required parameter for trying to display all cats
export const param: number = 1;

export const link: string = `${api}?min_life_expectancy=${param}`;

export const links: Array<string> = []; //82

for (let i: number = 0; i < 82; i += 20) {
  links.push(`${link}&offset=${i}`);
}
