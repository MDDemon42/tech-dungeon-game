import actionInCaseStrongStart from "./strongStart";

function onMessageOnGamePage(
    request: {
        type: string,
        data: any,
        token: string
    },
    sender: {
        tab?: {
            id?: number
        }
    }
) {
    console.log('Game page got message', request);

    if (request.token !== '^_^') {
        return
    }

    switch (request.type) {
        case 'strong_start':
            actionInCaseStrongStart(sender?.tab?.id!);
            break;

        default:
            break;
    }
}

export default onMessageOnGamePage