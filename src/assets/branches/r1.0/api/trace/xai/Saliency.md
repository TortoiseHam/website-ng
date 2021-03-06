## Saliency
```python
Saliency(model:~Model, model_inputs:Union[str, Sequence[str]], model_outputs:Union[str, Sequence[str]], class_key:Union[str, NoneType]=None, label_mapping:Union[Dict[str, Any], NoneType]=None, outputs:Union[str, List[str]]='saliency', samples:Union[NoneType, int, Dict[str, Any]]=None, mode:Union[str, Set[str]]=('eval', 'test'), smoothing:int=25, integrating:Union[int, Tuple[int, int]]=(25, 7)) -> None
```
A Trace which computes saliency maps for a given model throughout training.

#### Args:

* **model** :  A model compiled with fe.build to be analyzed.
* **model_inputs** :  Keys for the input values for the model.
* **model_outputs** :  Keys for the output values from a model.
* **class_key** :  The key of the true labels corresponding to the model inputs (not required).
* **label_mapping** :  {class_string model_output_value}.
* **outputs** :  The name of the output which will be generated by this trace.
* **samples** :  How many datapoints to collect in order to perform visualization, or {model_input_key model_input}.
* **mode** :  What mode(s) to execute this Trace in. For example, "train", "eval", "test", or "infer". To execute            regardless of mode, pass None. To execute in all modes except for a particular one, you can pass an argument            like "!infer" or "!train".
* **smoothing** :  How many rounds of smoothing should be applied to the saliency mask (0 to disable).
* **integrating** :  How many rounds of integration should be applied to the saliency mask (0 to disable). A tuple may            be used to indicate (# integration, # smoothing) if a different amount of smoothing is desired than was            provided by the smoothing variable (useful if you want to compare techniques / save on computation time)/    