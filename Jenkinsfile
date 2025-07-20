pipeline {
  agent any

  tools {
    nodejs "NodeJS 18" // Name of Node.js tool configured in Jenkins
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/Priyanka3027/SimpleCypressProject.git'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
    }
  }
}
