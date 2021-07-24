# 1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT datediff('2030-01-20', now()); -- 3103 (2020-07-23)

# 2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT timediff('11:00:00', '10:25:45'); -- 00:34:15
