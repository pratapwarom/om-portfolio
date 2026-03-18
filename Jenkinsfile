pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git credentialsId: 'github-token',
                    url: 'https://github.com/pratapwarom/om-portfolio.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building portfolio project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing project...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying portfolio...'
            }
        }
    }
}
