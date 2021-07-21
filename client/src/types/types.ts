// import { BlockLike } from "typescript"

export type DefaultStateAuthReduserType = {
    isSucsess: boolean
}
export type DialogsTextDataType = {
    id: number | null
    message: string | undefined
}
export type InterlocutorDataType = {
    id: number | null
    name: string | null
}
export type MusicType = {
    id: number
    path: string
    like: boolean
    title: string
    autor: string
    img: string
    duration: string
}
export type PostDataType = {
    id: number
    title: string
    message: string
    likesCount: number
}

type LocationType = {
    city: string
    country: string
}
type ContactsType = {
    facebook: string | null,
    website: string | null,
    twitter: string | null,
    instagramm: string | null,
    youtube: string | null,
    gitHub: string | null,
    myLink: string | null
}
export type UsersType = {
    id: number
    img: string | null
    follower: boolean
    fullName: string
    message: string
    person: string
    location: LocationType
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
}

