function show(arg1, arg2=1) {  // arg=2 is Default Parameter in case if we do not pass the value to that argument it will By Default accept this(arg2=1) one
    console.log(arg1, arg2);
    console.log(arg1/arg2);
}
show(100);
show(100, 101);