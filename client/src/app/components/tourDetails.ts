// @ts-ignore
export interface TourDetails {
    title: string,
    description: string,
    image: string,
    price: number,
    currency: string
}

export interface NewTours extends TourDetails {
    id: number,
    country?: string,
    city?: string
}

export const cardInfo : NewTours[] = [
    {
    id: 1,
    title: "Discover Iasi town",
    description: "Get to know the beautiful romanian city with rich history,\n" +
        "great architecture and other sights",
    image: "https://nordnews.md/wp-content/uploads/2020/11/iasi.jpg",
    price: 100,
    currency: '$'
    },
    {
        id: 2,
        title: "Discover Berlin town",
        description: "Get to know the beautiful german city with rich history,\n" +
            "great architecture and other sights",
        image: "https://www.deutschland.de/sites/default/files/media/image/T%C3%BCD_Politisches_Zentrum-Berlin_Reichstagsgeb%C3%A4ude.jpg",
        price: 200,
        currency: '$'
    },
    {
        id: 3,
        title: "Discover Paris town",
        description: "Get to know the beautiful french city with rich history,\n" +
            "great architecture and other sights",
        image: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
        price: 300,
        currency: '$'
    }]


