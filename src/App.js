import React from "react";
import './App.css';

const App = () => {
    async function xor() {
        const SVM = require('libsvm-js/asm');
        const svm = new SVM();

        const features = [[0, 0], [1, 1], [1, 0], [0, 1]];
        const labels = [0, 0, 1, 1];
        svm.train(features, labels);  // train the model
        const predictedLabel = svm.predictOne([0.7, 0.8]);
        console.log(predictedLabel) // 0
    }

    xor().then(() => console.log('done!'));

    return (
        <div style={{margin: "40px auto", width: "400px"}}>

        </div>
    )
}

export default App;