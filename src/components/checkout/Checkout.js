import { useState } from "react";
import "./checkout.scss";
import Bread from "../bread/Bread";
import { FormControl, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router";
const Checkout = () => {
  const history = useHistory();
  const style = {
    short: 95,
  };

  const [cardName, setCardName] = useState({ value: "", error: false });
  const [cardNumber, setCardNumber] = useState({ value: "", error: false });
  const [cardTerm, setCardTerm] = useState({ value: "", error: false });
  const [cardCVV, setCardCVV] = useState({ value: "", error: false });

  const checkoutCart = () => {
    cardName.value === ""
      ? setCardName({ ...cardName, error: true })
      : setCardName({ ...cardName, error: false });
    cardNumber.value === ""
      ? setCardNumber({ ...cardNumber, error: true })
      : setCardNumber({ ...cardNumber, error: false });
    cardTerm.value === ""
      ? setCardTerm({ ...cardTerm, error: true })
      : setCardTerm({ ...cardTerm, error: false });
    cardCVV.value === ""
      ? setCardCVV({ ...cardCVV, error: true })
      : setCardCVV({ ...cardCVV, error: false });
    if (
      cardName.value !== "" &&
      cardNumber.value !== "" &&
      cardTerm.value !== "" &&
      cardCVV.value !== ""
    ) {
      history.push("/thx");
    }
  };
  return (
    <>
      <Bread active="checkout" />
      <div className="checkout_wrapper">
        <FormControl fullWidth>
          <h3>Оплата</h3>
          <div className="checkout_inputs_wrapper">
            <div className="checkout_cardName">
              <h6>Имя на картке</h6>
              <TextField
                error={cardName.error}
                label="Konstantin Ivanov"
                variant="outlined"
                fullWidth
                onChange={(event) => {
                  setCardName({
                    ...cardName,
                    value: event.target.value,
                  });
                }}
              />
            </div>
            <div className="checkout_cardNumber">
              <h6>Номер карты</h6>
              <TextField
                error={cardNumber.error}
                label="ХХХХ ХХХХ ХХХХ ХХХХ"
                variant="outlined"
                fullWidth
                onChange={(event) => {
                  setCardNumber({
                    ...cardNumber,
                    value: event.target.value,
                  });
                }}
              />
            </div>
            <div className="card_data">
              <div className="checkout_cardTerm">
                <h6>Срок</h6>
                <TextField
                  error={cardTerm.error}
                  label="MM/YY"
                  variant="outlined"
                  style={{ width: style.short }}
                  onChange={(event) => {
                    setCardTerm({
                      ...cardTerm,
                      value: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="checkout_cardCVV" style={{ marginLeft: "2rem" }}>
                <h6>CVV</h6>
                <TextField
                  error={cardCVV.error}
                  variant="outlined"
                  style={{ width: style.short }}
                  onChange={(event) => {
                    setCardCVV({
                      ...cardCVV,
                      value: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <Button
              className="btn"
              variant="contained"
              onClick={() => checkoutCart()}
            >
              Оплатить
            </Button>
          </div>
        </FormControl>
      </div>
    </>
  );
};

export default Checkout;
