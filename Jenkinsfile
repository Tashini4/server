pipeline {
   agent any

     stages {
       stage ('Clone github Project') {
         steps {
            echo 'Cloning GitHub Project...'
           //git branch: 'main', url: 'https://github.com/Tashini4/server.git'
         }
       }
       //test stage
       stage('Build Docker Image') {
         steps {
            echo 'Building Docker Image...'
        //    script {
        //        bat 'docker build -t server:latest .'
        //    }
         }
       }
       //deploye docker hub
         stage('Deploy to Docker Hub') {
            steps {
                echo 'Deploying to Docker Hub...'
          //    script {
          //        bat 'docker login -u "<username>" -p "<password>"'
          //        bat 'docker tag server:latest <username>/server:latest'
          //        bat 'docker push <username>/server:latest'
          //    }
            }
         }

     }
post {
       always {
         echo 'Pipeline finished.'
       }
     }

}