import { types, IStateTreeNode, IType } from "mobx-state-tree";

const FormModel = types
    .model({
        phone: '',
        email: '',
        amountOfPersons: '',
    })
    .actions((self) => {
        const actions = {
            setPhone(value: string) {
                self.phone = value;
                localStorage.setItem('phone', value);
            },
            setEmail(value: string) {
                self.email = value;
                localStorage.setItem('email', value);
            },
            setAmount(value: string) {
                self.amountOfPersons = value;
                localStorage.setItem('amountOfPersons', value);
            },
            loadFromLocalStorage() {
                const phone = localStorage.getItem('phone');
                const email = localStorage.getItem('email');
                const amountOfPersons = localStorage.getItem('amountOfPersons');

                if (!phone && !email && !amountOfPersons) {
                    // If there is no persisted data in localStorage, initialize the values in the model and persist them
                    self.phone = 'default phone';
                    self.email = 'default email';
                    self.amountOfPersons = 'default amountOfPersons';
                    actions.persistToLocalStorage();
                } else {
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
            },
            persistToLocalStorage() {
                localStorage.setItem('phone', self.phone);
                localStorage.setItem('email', self.email);
                localStorage.setItem('amountOfPersons', self.amountOfPersons);
            },
        };
        return actions as {
            setPhone: (value: string) => void;
            setEmail: (value: string) => void;
            setAmount: (value: string) => void;
            loadFromLocalStorage: () => void;
            persistToLocalStorage: () => void;
        };
    });

const form = FormModel.create();
form.loadFromLocalStorage();

export default form;
