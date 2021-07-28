-- Exemplo de trigger para o INSERT:
-- Considerando a tabela perfil, hora de montar um Trigger que define a data de inserção e o tipo de operação, quando um novo registro é inserido.
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;

INSERT INTO perfil(saldo) VALUES (2500);
SELECT 
    *
FROM
    perfil;

-- Exemplo de trigger para o UPDATE :
-- Considerando a tabela perfil, hora de montar um Trigger que define a data de atualização e o tipo de operação, quando algum registro for modificado.
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;

UPDATE perfil 
SET 
    saldo = 3000
WHERE
    perfil_id = 1;

SELECT 
    *
FROM
    perfil;

-- Exemplo de trigger para o DELETE:
-- Considerando a tabela log_perfil, hora de criar um trigger que envia informações para essa tabela quando um registro da tabela perfil é excluído.
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;

DELETE FROM perfil 
WHERE
    perfil_id = 1;

SELECT 
    *
FROM
    log_perfil;
