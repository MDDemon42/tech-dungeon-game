const user = {
    name: 'Adventurer',
    class: 'noIcon'
}

function setUserName(name: string) {
    user.name = name
}

function setUserClass(value: string) {
    user.class = value
}

function getUser() {
    return user
}