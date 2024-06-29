const box = document.querySelector(".box")
while (nums.length + 1 <= 7){
    nums.push(nums.length + 1);
    console.log(nums)
}
for (const numero of nums) {
    if (numero === 1){
    console.log(`"O único lugar onde o sucesso vem antes do trabalho é no dicionário."`)
    }
    else if(numero === 2){
        console.log(`"Acredite que você pode, e você já estará no meio do caminho."`)
    }
    else if(numero === 3){
        console.log(`"Não espere por oportunidades extraordinárias. Agarre as ocasiões comuns e torne-as grandes."`)
    }
    else if(numero === 4){
        console.log(`"A persistência é o caminho do êxito."`)
    }
    else if(numero === 5){
        console.log(`"Você é mais forte do que pensa e será mais feliz do que imagina."`)
    }
    else if(numero === 6){
        console.log(`"A diferença entre o possível e o impossível está na determinação."`)
    }
    else if(numero === 7){
        console.log(`"Cada dificuldade é uma oportunidade disfarçada."`)
    }    
}