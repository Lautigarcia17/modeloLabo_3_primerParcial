<?php

include_once "Usuario.php";
include_once "ICRUD.php";


class Empleado extends Usuario implements ICRUD
{
    public string $foto;
    public float $sueldo;

    public function __construct($nombreIngresado,$correoIngresado,$claveIngresada,$idIngresado=0,$id_perfilIngresado=0,$fotoIngresada,$sueldoIngresado,$perfilIngresado="") {
        parent::__construct($nombreIngresado,$correoIngresado,$claveIngresada,$idIngresado,$id_perfilIngresado,$perfilIngresado);
        $this->foto = $fotoIngresada;
        $this->sueldo = $sueldoIngresado;
    }

    public static function TraerTodos() : array
    {
        try 
        {
            $arrayEmpleados = array();
            $pdo = new PDO("mysql:host=localhost;dbname=usuarios_test","root","");
            $sql = $pdo->query("SELECT * FROM empleados INNER JOIN perfiles ON
                                empleados.id_perfil = perfiles.id"); // union de 2 tablas

            if($sql !=false)
            {
                $resultado = $sql->fetchAll();
                foreach ($resultado as $value) {
                    array_push($arrayEmpleados,new Empleado($value["nombre"],$value["correo"], 
                                                          $value["clave"],$value[0],
                                                          $value["id_perfil"],$value["foto"],
                                                          $value["sueldo"],$value["descripcion"]));
                }
            } 

        } catch (PDOException $e) {
            echo " Error = ". $e->getMessage();
        }
        return $arrayEmpleados;
    }
    public function Agregar() : bool
    {
        $rtn = false;
        try {
            $this->foto = $this->foto !="" ? "empleados/fotos/" . $this->nombre . "." . date("His") . "." . pathinfo($this->foto, PATHINFO_EXTENSION) : "";

            $pdo = new PDO("mysql:host=localhost;dbname=usuarios_test","root","");
            $sql = $pdo->prepare("INSERT INTO `empleados`(`nombre`,`correo`, `clave`,`id_perfil`,`foto`,`sueldo`) VALUES (:nombre,:correo,:clave,:id_perfil,:foto,:sueldo)"); // retonar false o retorna un PDOStatement
            $sql->bindParam(':nombre',$this->nombre,PDO::PARAM_STR,30);
            $sql->bindParam(':correo',$this->correo,PDO::PARAM_STR,50);
            $sql->bindParam(':clave',$this->clave,PDO::PARAM_STR,8);
            $sql->bindParam(':id_perfil',$this->id_perfil,PDO::PARAM_INT);
            $sql->bindParam(':foto',$this->foto,PDO::PARAM_STR);
            $sql->bindParam(':sueldo',$this->sueldo,PDO::PARAM_INT);
            $sql->execute();
            
            $rtn = $sql->rowCount() > 0 ? true : false;
            
            move_uploaded_file($_FILES["foto"]["tmp_name"],$this->foto);
        } catch (PDOException $e) {
            echo " Error = ". $e->getMessage();
        }
        return $rtn;
    }
    public function Modificar() : bool
    {
        try {
            $this->foto = $this->foto !="" ? "empleados/fotos/" . $this->nombre . "." . date("His") . "." . pathinfo($this->foto, PATHINFO_EXTENSION) : "";
            
            $rtn = false;
            $pdo = new PDO("mysql:host=localhost;dbname=usuarios_test","root","");
            $sql = $pdo->prepare("UPDATE `empleados` SET `nombre`= :nombre,`correo`=:correo,`clave`= :clave,`id_perfil`=:id_perfil,`foto`=:foto,`sueldo`=:sueldo WHERE id = :id"); // retonar false o retorna un PDOStatement
            
            $sql->bindParam(':id',$this->id,PDO::PARAM_INT);
            $sql->bindParam(':nombre',$this->nombre,PDO::PARAM_STR,30);
            $sql->bindParam(':correo',$this->correo,PDO::PARAM_STR,50);
            $sql->bindParam(':clave',$this->clave,PDO::PARAM_STR,8);
            $sql->bindParam(':id_perfil',$this->id_perfil,PDO::PARAM_INT);
            $sql->bindParam(':foto',$this->foto,PDO::PARAM_STR);
            $sql->bindParam(':sueldo',$this->sueldo,PDO::PARAM_INT);
            
            $sql->execute();
 
            $rtn = $sql->rowCount() > 0 ? true : false;
            
        } catch (PDOException $e) {
            echo " Error = ". $e->getMessage();
        }

        return $rtn;
    }
    public  static function Eliminar($id) : bool
    {
        $rtn = false;
        try {

            $pdo = new PDO("mysql:host=localhost;dbname=usuarios_test","root","");
            $sql = $pdo->prepare("DELETE FROM `empleados` WHERE id = :id");    
            $sql->bindParam(':id',$id,PDO::PARAM_INT);
            $sql->execute();
            
            $rtn = $sql->rowCount() > 0 ? true : false;

        } catch (PDOException $e) {
            echo " Error = ". $e->getMessage();
        }

        return $rtn;  
    }

}



?>
