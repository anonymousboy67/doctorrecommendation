document.addEventListener('DOMContentLoaded', function() {
    // Symptoms dictionary - using the same symptoms as in the Python code
    const symptomsList = [
        'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 
        'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 
        'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 
        'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 
        'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 
        'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 
        'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 
        'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 
        'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 
        'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 
        'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 
        'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 
        'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 
        'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 
        'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 
        'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 
        'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 
        'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 
        'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 
        'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 
        'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 
        'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 
        'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 
        'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 
        'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 
        'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 
        'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 
        'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 
        'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 
        'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'
    ];

    const symptomsInput = document.getElementById('symptoms');
    const symptomsSuggestions = document.getElementById('symptomsSuggestions');

    // Format symptoms for display (replace underscores with spaces, capitalize words)
    function formatSymptom(symptom) {
        return symptom.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }

    // Show suggestions based on input
    symptomsInput.addEventListener('input', function() {
        const inputValue = this.value;
        const lastSymptom = inputValue.split(',').pop().trim().toLowerCase();
        
        if (lastSymptom.length < 2) {
            symptomsSuggestions.innerHTML = '';
            symptomsSuggestions.style.display = 'none';
            return;
        }

        const matchedSymptoms = symptomsList.filter(symptom => 
            symptom.toLowerCase().includes(lastSymptom)
        ).slice(0, 5); // Limit to 5 suggestions
        
        if (matchedSymptoms.length > 0) {
            symptomsSuggestions.innerHTML = '';
            matchedSymptoms.forEach(symptom => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = formatSymptom(symptom);
                div.addEventListener('click', function() {
                    const symptoms = symptomsInput.value.split(',');
                    symptoms.pop(); // Remove the partial input
                    if (symptoms.length > 0) {
                        symptomsInput.value = symptoms.join(',') + ', ' + symptom;
                    } else {
                        symptomsInput.value = symptom;
                    }
                    symptomsSuggestions.innerHTML = '';
                    symptomsSuggestions.style.display = 'none';
                    symptomsInput.focus();
                });
                symptomsSuggestions.appendChild(div);
            });
            symptomsSuggestions.style.display = 'block';
        } else {
            symptomsSuggestions.innerHTML = '';
            symptomsSuggestions.style.display = 'none';
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', function(event) {
        if (event.target !== symptomsInput && event.target !== symptomsSuggestions) {
            symptomsSuggestions.style.display = 'none';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading effect when form is submitted
    const predictionForm = document.querySelector('form');
    if (predictionForm) {
        predictionForm.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitButton.disabled = true;
        });
    }

    // Fade in result cards with a small delay
    const resultCards = document.querySelectorAll('.info-card');
    if (resultCards.length > 0) {
        resultCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Initialize tooltips for medical terms
    const medicalTerms = document.querySelectorAll('.medical-term');
    if (medicalTerms.length > 0) {
        medicalTerms.forEach(term => {
            // You could add a tooltip library here if needed
            term.style.textDecoration = 'underline dotted';
            term.style.cursor = 'help';
        });
    }
});