import {types} from "mobx-state-tree";
import {runInAction} from "mobx";

// const FormField = types.model({
//     value: ''
// });

// @ts-ignore
const FormModel = types
    .model({
        phone: '',
        email: '',
        amountOfPersons: ''
    })
    .actions(self => ({
        setPhone(value: string) {
            self.phone = value;
            localStorage.setItem('phone', value);
        },
        setEmail(value: string) {
            self.email = value;
            localStorage.setItem('email', value);
        },
        setAmount(value: string) {
            // @ts-ignore
            self.amountOfPersons = value;
            localStorage.setItem('amountOfPersons', value);
        },
        loadFromLocalStorage() {
            const phone = localStorage.getItem('phone');
            const email = localStorage.getItem('email');
            const amountOfPersons = localStorage.getItem('amountOfPersons');

            if (phone) {
                    self.phone = phone;
            }
            if (email) {
                    self.email = email;
            }
            if (amountOfPersons) {
                    self.amountOfPersons = amountOfPersons;
                }
            }
        }
    ));

const form = FormModel.create();

export default form;