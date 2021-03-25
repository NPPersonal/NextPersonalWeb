export type LaningPageProps = {
    common:{
      contact:{
        location: string,
        phone: string,
        mobile: string,
        email: string,
      },
      socialLinks:{
        github: string,
        linkedIn: string,
        medium: string,
        facebook: string,
      }
    },
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
    },
    skill:{
        group:{
            title: string,
            skills:{
                title: string,
                value: number,
            }[]
        }[]
    }
}
