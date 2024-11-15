import {getAuth} from 'firebase/auth'
const auth = getAuth();

export const getUserData = async () => {
    try{
        const user = auth.currentUser;
        if(user) {
            const email = user.email;
            const uuid = user.uid;
            return{email, uuid}
        }else {
            return null;
        }
    }catch(e) {
        console.log("errr", e);
        return null;
    }
} 

export const users = [
    {
        "id":1,
        "phone": "(+91) 9589467888",
        "pan" : 'ASQKPO5581',
        "segments" : "NSE, BSE, NFO, CDS, MCX",
        "product" : "BO, CMC, MIS, NIRMI",
        "accType": "Individual",
        "bankAcc" : "5224551145789",
        "bank" : "HDFC",
        "investmentPortfolio": [
            {
                "instrument": "Reliance",
                "quantity": 50,
                "value": 50000
            },
            {
                "instrument": "HDFC Bank",
                "quantity": 20,
                "value": 20000
            }
        ]
    }
]