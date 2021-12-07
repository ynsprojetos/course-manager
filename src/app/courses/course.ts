export class Course {

  constructor(
    id: number = 0,
    name: string = '',
    imageUrl: string = '',
    price: number = 0,
    code: string = '',
    duration: number = 0,
    rating: number = 0,
    realeaseDate: string = '',
    description: string = ''
    ){
      this.id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.price = price;
      this.code = code;
      this.duration = duration;
      this.rating = rating;
      this.realeaseDate = realeaseDate;
      this.description = description
  }

  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  realeaseDate: string;
  description: string
}
