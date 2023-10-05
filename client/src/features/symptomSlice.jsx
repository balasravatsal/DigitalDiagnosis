import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    symptoms: [
        {name: 'itching', selected: false},
        {name: 'skin_rash', selected: false},
        {name: 'nodal_skin_eruptions', selected: false},
        {name: 'continuous_sneezing', selected: false},
        {name: 'shivering', selected: false},
        {name: 'chills', selected: false},
        {name: 'joint_pain', selected: false},
        {name: 'stomach_pain', selected: false},
        {name: 'acidity', selected: false},
        {name: 'ulcers_on_tongue', selected: false},
        {name: 'muscle_wasting', selected: false},
        {name: 'vomiting', selected: false},
        {name: 'burning_micturition', selected: false},
        {name: 'spotting_urination', selected: false},
        {name: 'fatigue', selected: false},
        {name: 'weight_gain', selected: false},
        {name: 'anxiety', selected: false},
        {name: 'cold_hands_and_feets', selected: false},
        {name: 'mood_swings', selected: false},
        {name: 'weight_loss', selected: false},
        {name: 'restlessness', selected: false},
        {name: 'lethargy', selected: false},
        {name: 'patches_in_throat', selected: false},
        {name: 'irregular_sugar_level', selected: false},
        {name: 'cough', selected: false},
        {name: 'high_fever', selected: false},
        {name: 'sunken_eyes', selected: false},
        {name: 'breathlessness', selected: false},
        {name: 'sweating', selected: false},
        {name: 'dehydration', selected: false},
        {name: 'indigestion', selected: false},
        {name: 'headache', selected: false},
        {name: 'yellowish_skin', selected: false},
        {name: 'dark_urine', selected: false},
        {name: 'nausea', selected: false},
        {name: 'loss_of_appetite', selected: false},
        {name: 'pain_behind_the_eyes', selected: false},
        {name: 'back_pain', selected: false},
        {name: 'constipation', selected: false},
        {name: 'abdominal_pain', selected: false},
        {name: 'diarrhoea', selected: false},
        {name: 'mild_fever', selected: false},
        {name: 'yellow_urine', selected: false},
        {name: 'yellowing_of_eyes', selected: false},
        {name: 'acute_liver_failure', selected: false},
        {name: 'fluid_overload', selected: false},
        {name: 'swelling_of_stomach', selected: false},
        {name: 'swelled_lymph_nodes', selected: false}
    ],
    loading: false,
    error: null
};

// export const fetchSymptoms = createAsyncThunk('symptoms/postSymptoms', async (payload, { rejectWithValue }) => {
//     try {
//         const response = await fetch('http://localhost:5000/symptomsdata', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });
//
//         if (!response.ok) {
//             const errorData = await response.json();
//             return rejectWithValue(errorData); // handle non-200 responses here
//         }
//
//         return await response.json();
//     } catch (error) {
//         throw error;
//     }
// });


export const submitSymptoms = createAsyncThunk(
    'symptoms/submitSymptoms',
    async (symptomsDataOfUser, { rejectWithValue }) => {
        console.log(symptomsDataOfUser)
        try {
            const response = await axios.post('http://localhost:5000/symptomsdata', {
                data: {
                    symptomsData: symptomsDataOfUser
                }
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const symptomsSlice = createSlice({
    name: 'symptoms',
    initialState,
    reducers: {
        setSymptomsReducer: (state, action) => {
            const {name, value} = action.payload;
            const symptomIndex = state.symptoms.findIndex(symptom => symptom.name === name);
            if (symptomIndex !== -1) {
                state.symptoms[symptomIndex].selected = value;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitSymptoms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitSymptoms.fulfilled, (state) => {
                state.loading = false;
                // You can handle any successful response data here if needed
                state.error = null;
            })
            .addCase(submitSymptoms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // handle error message here
            });
    },
});

export const {setSymptomsReducer,} = symptomsSlice.actions

export default symptomsSlice.reducer;
