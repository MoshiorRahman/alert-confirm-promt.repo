console.log('i am hear');
// alert('ma is commig,,,go now');

const maComming = () => {
    alert('Ammu is comming, Open the book.');
}

const askPicnic = () => {
    const response = confirm('are you going to picnic');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bkash kore de');
    }
    else {
        console.log('DGM !! dure giya mor');
    }

}

const askName = () => {
    const name = prompt('what is your naem?')
    if (name) {
        console.log(name)
    }
}

