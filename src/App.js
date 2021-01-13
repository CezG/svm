import React from "react";
import "./App.css";

const App = () => {
  async function xor() {
    const SVM = require("libsvm-js/asm");
    const svm = new SVM({
      kernel: SVM.KERNEL_TYPES.RBF, // The type of kernel I want to use
      type: SVM.SVM_TYPES.C_SVC, // The type of SVM I want to run
      gamma: 1, // RBF kernel gamma parameter
      cost: 1, // C_SVC cost parameter
    });

    const features = [
      [0, 0],
      [1, 1],
      [1, 0],
      [0, 1],
    ];
    const labels = [0, 0, 1, 1];
    svm.train(features, labels); // train the model
    for (let i = 0; i < features.length; i++) {
      const pred = svm.predictOne(features[i]);
      console.log(`actual: ${labels[i]}, predicted: ${pred}`);
    }
    console.log("sv indices", svm.getSVIndices());
    console.log("labels", svm.getLabels());
    console.log("save model", svm.serializeModel());
    const predictedLabel = svm.predictOne([0.7, 0.8]);
    console.log(predictedLabel); // 0
  }

  xor().then(() => console.log("done!"));

  return <div style={{ margin: "40px auto", width: "400px" }}></div>;
};

export default App;
