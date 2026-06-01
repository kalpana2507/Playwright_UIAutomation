pipeline {
    agent any // Runs this pipeline on any available executor

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling code from repository...'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Example: sh 'mvn clean package' or sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running unit tests...',
                 sh npm run test:login
                // Example: sh 'mvn test' or sh 'npm test'
            }
          }
        stage('Deploy') {
            steps {
                echo 'Deploying application to server...'
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up workspaces and reporting results.'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs.'
        }
    }
}
