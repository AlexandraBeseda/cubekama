type MessagePropTypes = {
    id: number,
    message: string
}
type DialogItemPropTypes = {
    name: string,
    id: number
}
type DialogsPropTypes = {
    dialogsData: Array<DialogItemPropTypes>,
}
type NewPostType = {
    id: number,
    message: string,
    likes: number
}
type PostsDataArrayPropTypes = {
    postsData: Array<NewPostType>;
}
type SideBarType = {}

type RootStateType = {
    mainContent: PostsDataArrayPropTypes,
    dialogsPage: DialogsPropTypes,
    messagesData: Array<MessagePropTypes>,
    sidebar: SideBarType

}

export let state: RootStateType = {

    mainContent: {
        postsData: [
            {id: 1, message: 'Hello!How are you?', likes: 10},
            {id: 2, message: 'I saw you yesterday', likes: 30},
            {id: 3, message: 'Buy some potatoes?', likes: 0},
            {id: 4, message: 'I want cheese', likes: 10},
            {id: 5, message: 'Hurry', likes: 100}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Yauheni"},
            {id: 2, name: "Nina"},
            {id: 3, name: "Alina"},
            {id: 4, name: "Nasty"},
            {id: 5, name: "Ira"},
        ]
    },
    messagesData: [
        {id: 1, message: "Hi sweet!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Go home!"},
        {id: 4, message: "Try again tomorrow."},
        {id: 5, message: "No."},
    ],

    sidebar: {}
}