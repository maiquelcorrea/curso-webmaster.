<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
    <title>Login facebook</title>
</head>
<body>
    <header>
        <div class="center">
            <div class="logo">
                <h2>facebook</h2>
            </div><!--logo-->

            <form method="post" class="form-login">
                <div class="form-element">
                    <p>E-mail ou telefone</p>
                    <input type="email" name="" id="">
                </div><!--form-element-->
                
                <div class="form-element">
                    <p>Senha</p>
                    <input type="password" name="" id="">
                </div><!--form-element-->

                <div class="form-element">
                    <input type="submit" name="acao" value="Entrar">
                </div><!--form-element-->
            </form><!--form-login-->
            <div class="clear"></div>
        </div> <!--center-->
    </header>
    
    <section class="main">
        <div class="center">
            <div class="img-pessoas">
                <img src="facebook.png" alt="">
            </div><!--img-pessoas-->

            <div class="abrir-conta">
                <h2>Abra uma conta</h2>
                <h3>É gratuito e sempre será.</h3>

                <form class="criar-conta">
                    <div class="w50">
                        <input placeholder="nome" type="text" name="" id="">
                    </div><!--w50-->

                    <div class="w50">
                        <input placeholder="sobrenome" type="text" name="" id="">
                    </div><!--w50-->

                    <div class="w100">
                        <input placeholder="E-mail" type="email" name="" id="">
                    </div><!--w100-->

                    <div class="w100">
                        <input placeholder="Senha" type="password" name="" id="">
                    </div><!--w100-->

                    <div class="w100">
                        <h2>Data de Nascimento</h2>
                        <select class="nascimento" name="nascimento-dia" id="">
                            <?php
                                for ($i = 1; $i <= 31; $i++) { 
                            ?>  
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                            <?php } ?>
                        </select>

                        <select class="nascimento" name="nascimento-mes" id="">
                            <option value="1">janeiro</option>
                            <option value="2">fevereiro</option>
                            <option value="3">março</option>
                            <option value="4">abril</option>
                            <option value="5">maio</option>
                            <option value="6">junho</option>
                            <option value="7">julho</option>
                            <option value="8">agosto</option>
                            <option value="9">setembro</option>
                            <option value="10">outubro</option>
                            <option value="11">novembro</option>
                            <option value="12">dezembro</option>
                        </select>

                        <select class="nascimento" name="nascimento-ano" id="">
                            <?php
                                for ($i = 1960; $i <= 2024; $i++) { 
                            ?>  
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                            <?php } ?>
                        </select>

                        <div class="clear"></div>
                    </div><!--w100-->
                        
                    <div class="w100">
                        <div class="input-radio">
                                <input type="radio" value="masculino" name="sexo" id="">
                                <h2>Masculino</h2>
                        </div><!--input-radio-->

                        <div class="input-radio">
                                <input type="radio" value="feminino" name="sexo" id="">
                                <h2>Feminino</h2>
                        </div><!--input-radio-->

                        <div class="clear"></div>
                    </div><!--w100-->

                    <div class="w100">
                        <input type="submit" value="Cadastrar!">
                    </div><!--w100-->

                    <div class="clear"></div>
                </form><!--criar-conta-->
            </div><!--abrir-conta-->

            <div class="clear"></div>
        </div><!--center-->
    </section><!--main-->

    <section class="linguas">
        <div class="center">
            <a class="selected-lingua" href="#">português (BR)</a>
            <a class="" href="#">português (BR)</a>
            <a class="" href="#">português (BR)</a>
            <a class="" href="#">português (BR)</a>
            <a class="" href="#">português (BR)</a>
            <a class="" href="#">português (BR)</a>
            <a class="" href="#">português (BR)</a>
            <a class="" href="#">português (BR)</a>
        </div><!--center-->

        <div style="border:0;padding-top:10px; " class="center">
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
            <a href="#">Lorem ipsum</a>
        </div><!--center-->
    </section><!--linguas-->
</body>
</html>