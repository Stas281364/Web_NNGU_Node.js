import process from 'node:process';
//console.log('arguments', process.argv);

process.stdout.write("Введите коэффиценты квадратного уравнения через аргументы node js в следующем порядке: a, b, c - через пробел \n" );
if (process.argv.length == 2) {
    process.stdout.write("Вы не ввели аргументы\n");
    process.exit(1);
}
else{
    
    if (isNaN(process.argv[2]) != true && isNaN(process.argv[3]) != true && isNaN(process.argv[4]) != true && process.argv.length != 5) {
        process.stdout.write("Вы ввели не целочисленные значения в аргументы или больше трёх аргументов\n");
        
    } else {
        let a,b,c, D;
        a = process.argv[2];
        b = process.argv[3];
        c = process.argv[4];
        
        D = b*b - 4*a*c;
        //console.log(D);
        if (D > 0) {
            process.stdout.write("Cуществует 2 корня уравнения \n");
            process.exit(0);
        }
        else if(D == 0)
        {
            
            process.stdout.write("Cуществует 1 корень уравнения \n");
            process.exit(0);
        }
        else if(D < 0)
        {
            process.stderr._write("Корней уравнения не существует или их бесконечное множество \n")
            process.exit(5);
        }
    }
}


