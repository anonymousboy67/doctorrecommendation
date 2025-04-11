import os

class Config:
    """Configuration class for the Flask application"""
    # Secret key for session and CSRF protection
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key-here'
    
    # Debug mode (should be False in production)
    DEBUG = os.environ.get('FLASK_DEBUG') or True
    
    # Application directory
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    
    # Dataset directory
    DATASET_DIR = os.path.join(BASE_DIR, 'dataset')
    
    # Models directory
    MODELS_DIR = os.path.join(BASE_DIR, 'models')
    
    # Static files directory
    STATIC_FOLDER = os.path.join(BASE_DIR, 'static')
    
    # Templates directory
    TEMPLATE_FOLDER = os.path.join(BASE_DIR, 'templates')
    
    # Upload settings (if needed)
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB max file size
    UPLOAD_FOLDER = os.path.join(STATIC_FOLDER, 'uploads')
    ALLOWED_EXTENSIONS = {'csv', 'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}