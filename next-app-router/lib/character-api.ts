// Server-side functions that return promises for character data
export interface Character {
  name: string;
  description: string;
  avatarUrl: string;
}

export function getPeterPanData(): Promise<Character> {
  // Don't await here - return the promise directly
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Peter Pan',
        description:
          "The boy who wouldn't grow up! Peter Pan lives in Neverland with his fairy companion Tinker Bell and leads the Lost Boys on countless magical adventures.",
        avatarUrl: '/perter_pan.jpeg',
      });
    }, 1000); // 1 second delay
  });
}

export function getTinkerBellData(): Promise<Character> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Tinker Bell',
        description:
          "A spirited and feisty fairy from Pixie Hollow! Tinker Bell is Peter Pan's loyal companion and one of Disney's most beloved characters, known for her magical pixie dust.",
        avatarUrl: '/tinker_bell.png',
      });
    }, 2000); // 2 seconds delay
  });
}

export function getHarryPotterData(): Promise<Character> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Harry Potter',
        description:
          'The Boy Who Lived! Harry Potter is a young wizard who discovered his magical heritage on his 11th birthday and went on to defeat the Dark Lord Voldemort.',
        avatarUrl: '/harry_potter.jpg',
      });
    }, 3000); // 3 seconds delay
  });
}
