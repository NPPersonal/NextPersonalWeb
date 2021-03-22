export type IPageProps = {
    hero:{
      heroBgImageURL: string,
    },
    about:{
      personName: string,
      occupation: string,
      brief: string,
      age: string,
      location: string,
      email: string,
      experiences: {
        number: number,
        suffix: string,
        title: string,
      }[]
    }
}

