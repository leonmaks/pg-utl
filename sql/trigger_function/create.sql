CREATE ${replace^} FUNCTION ${name^}(${args^})
RETURNS TRIGGER AS $$ BEGIN
${body^}
RETURN ${retval^}; END; $$ LANGUAGE plpgsql
