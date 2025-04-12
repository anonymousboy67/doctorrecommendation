# Disease Prediction System

A web-based application that predicts diseases based on symptoms input by users. This intelligent system also provides detailed information about the predicted disease, including descriptions, precautions, recommended medications, diet plans, and workout suggestions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Dataset Information](#dataset-information)
- [Model Information](#model-information)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Overview

This Disease Prediction System uses machine learning to analyze user-input symptoms and predict potential diseases. Beyond simple prediction, the application provides comprehensive information to help users understand their potential condition and take appropriate actions.

## Features

- **Disease Prediction**: Accurately predicts diseases based on user-input symptoms
- **Disease Information**: Provides detailed descriptions of predicted diseases
- **Precautions**: Lists recommended precautions to manage the condition
- **Medication Suggestions**: Offers information about commonly prescribed medications
- **Diet Recommendations**: Suggests suitable diet plans for the predicted condition
- **Exercise Recommendations**: Provides appropriate workout suggestions

## Technologies Used

- **Backend**: Flask (Python)
- **Machine Learning**: scikit-learn (Support Vector Classification)
- **Data Processing**: NumPy, Pandas
- **Frontend**: HTML, CSS, JavaScript (assumed)
- **Model Serialization**: Pickle

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/disease-prediction-system.git
   cd disease-prediction-system
   ```

2. Create and activate a virtual environment (recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install required packages:
   ```
   pip install flask numpy pandas scikit-learn
   ```

4. Ensure you have the necessary dataset files in the `dataset` folder:
   - symtoms_df.csv
   - precautions_df.csv
   - workout_df.csv
   - description.csv
   - medications.csv
   - diets.csv

5. Make sure the trained model file exists in the `models` folder:
   - svc.pkl

## Usage

1. Start the Flask application:
   ```
   python app.py
   ```

2. Open your web browser and navigate to:
   ```
   http://127.0.0.1:5000/
   ```

3. Enter your symptoms separated by commas (e.g., "itching, skin_rash, fatigue")

4. Click the submit button to get predictions and recommendations

## Dataset Information

The application uses multiple datasets:

- **symtoms_df.csv**: Contains symptom information for various diseases
- **precautions_df.csv**: Lists precautionary measures for each disease
- **workout_df.csv**: Contains exercise recommendations for each condition
- **description.csv**: Provides detailed descriptions of various diseases
- **medications.csv**: Lists commonly prescribed medications for each disease
- **diets.csv**: Contains dietary recommendations for different conditions

## Model Information

The system uses a Support Vector Classification (SVC) model trained on symptom data. The model is serialized and stored as `svc.pkl`.

## Project Structure

```
disease-prediction-system/
│
├── app.py                  # Main Flask application
├── models/                 # Contains trained machine learning models
│   └── svc.pkl             # Serialized SVC model
│
├── dataset/                # Data files
│   ├── symtoms_df.csv
│   ├── precautions_df.csv
│   ├── workout_df.csv
│   ├── description.csv
│   ├── medications.csv
│   └── diets.csv
│
├── templates/              # HTML templates
│   └── index.html          # Main interface template
│
├── static/                 # Static files (CSS, JS, images)
│
├── requirements.txt        # Project dependencies
└── README.md               # Project documentation
```

## Screenshots

[Insert screenshots of your application here]

## Future Improvements

- Add user authentication and profile management
- Implement symptom tracking over time
- Add a medical professional consultation feature
- Expand the dataset to cover more diseases and symptoms
- Improve model accuracy with more advanced algorithms
- Create a mobile application version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
