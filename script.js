function calc(){
    let euro = euroField.value;
    let result = euro * 1.0972;
    usd.value = result.toFixed(2).replace('.',',');
 

}