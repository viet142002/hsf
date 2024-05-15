import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { User } from '~/types';

interface UserState {
    user: User;
    setUser: (user: User) => void;
}

const initialState: User = {
    _id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    createdAt: '',
    updatedAt: '',
};
const user = create<UserState>()(
    persist(
        devtools((set) => ({
            user: initialState,
            setUser: (user) => set({ user }),
            logout: () => set({ user: initialState }),
        })),
        {
            name: 'user-storage',
        },
    ),
);

export default user;
