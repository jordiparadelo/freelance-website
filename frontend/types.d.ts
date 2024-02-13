type ProductType = {
    id: string,
    href: string,
    image: {
        src: string,
        alt: string,
        width: number,
        height: number,
    },
    title: string,
    details: string,
    category: string,
    preview: string,
    softwares: string[],
    likes: number,
    comments: {
        id: number,
        comment: string,
    }[],
    price: number,
}

type ProjectsType = {
    id: string,
    href: string,
    image: {
        src: string,
        alt: string,
        width: number,
        height: number,
    },
    title: string,
    details: string,
    category: string,
    preview: string,
    categories: string[],
    likes: number,
    comments: {
        id: number,
        comment: string,
    }[],
    price: number,
}

type ReviewsType = {
    id: string,
    image: {
        src: string,
        alt: string,
        width: number,
        height: number,
    },
    title: string,
    description: string,
}