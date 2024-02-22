function printDivisors(n){
    let i;
    for(i=1;i*i<n;i++)
    if(n%i===0)
    console.log(i)
    for(;i>=1;i--)
    if(n%i===0)
    console.log(n/i)
}

printDivisors(250)
