// 프로그래머를 나타내는 변수
type Programmer = { favoriteLanguage: string };
const programmer: Programmer = { favoriteLanguage: 'TypeScript' };

// 디저트를 좋아하는 사람을 나타내는 변수
type DissertLover = { favoriteDissert: string };
const dissertLover: DissertLover = { favoriteDissert: 'cheeseCake' }; 

// 디저트를 좋아하는 프로그래머를 나타내는 변수
type DissertLoverProgrammer = { 
  favoriteLanguage: string;
  favoriteDissert: string;
};
const seungAh: DissertLoverProgrammer = {
  favoriteLanguage: 'TypeScript',
  favoriteDissert: 'cheeseCake'
};

type DissertLoverProgrammer2 = Programmer & DissertLover;

type notAble = string & number; // 실제로 어떤 값도 가질 수 없다.

type Awsome 
  = Programmer 
  & DissertLover 
  & notAble;