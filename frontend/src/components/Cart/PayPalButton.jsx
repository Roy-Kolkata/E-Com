import { PayPalButtons,PayPalScriptProvider } from "@paypal/react-paypal-js";


const PayPalButton = ({amount,onSuccess,onError}) => {
    return <PayPalScriptProvider options={{"client-id":"AblyKRBiKHhbZRGd38p5kRa4cyYfc6Nvv3w-XZ8D-yWyxg9aoyiYXn_9mX6NWpPK-PdzxNB0Z6FL97iw"}}>
        <PayPalButtons style={{layout :"vertical"}}
        createOrder={(data,actions)=>{
            return actions.order.create({
                purchase_units:[{amount:{value:amount}}]
            })
        }}
        onApprove={(data,actions)=>{
            return actions.order.capture().then(onSuccess)
        }}
        onError={onError}
        />
    </PayPalScriptProvider>
}

export default PayPalButton;