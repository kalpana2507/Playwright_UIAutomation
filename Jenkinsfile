pipeline {
    agent any
    
    tools {
        nodejs "Node 18" // Must match the exact name from Global Tool Configuration
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm // Pulls project files from your Git repo
            }
        }
         stage('Install Dependencies') {
            steps {
                // Installs package.json dependencies and system binaries
                bat 'npm ci' 
                bat 'npx playwright install --with-deps'
            }
        }
        
        stage('Run Playwright Test File') {
            steps {
                // Executes your custom package.json command
                bat 'npm run test:login'
            }
        }
    }
    
    post {
        always {
            // Optional: Publish HTML or JUnit report artifacts
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
        }
    }
}
