#!/usr/bin/env bash

# Initialize local variables
Env=${bamboo_env}
RootPath=${bamboo_root_path}
FolderName=${bamboo_env}
TargetIp=${bamboo_target_host} # FRA-AM2 internal IP address

echo "$(date): Start copy the source code artifact to the remote server"
scp artifact.tar.gz bamboo@${TargetIp}:${RootPath}artifact.tar.gz
echo "$(date): End copy the source code artifact to the remote server"

# Connect to the target server via bamboo IAM user
#ssh -i ~/.ssh/id_rsa -A bamboo@auth.app-arena.com ssh ${TargetIp}
ssh -T bamboo@${TargetIp} << EOSSH
    sudo su

    echo "$(date): Start Debugging"
    cd ${RootPath}
    ls -l
    echo "Show environment variables"
    echo "Env: ${Env}"
    echo "RootPath: ${RootPath}"
    echo "FolderName: ${FolderName}"
    echo "$(date): End Debugging"

    echo "$(date): Start creating new source code folder"
    mkdir ${RootPath}${FolderName}_new/
    echo "$(date): End creating new source code folder"

    echo "$(date): Start extract and delete source-code zip file"
    cd ${RootPath}${FolderName}_new/
    mv ${RootPath}artifact.tar.gz .
    tar -xzf artifact.tar.gz
    rm artifact.tar.gz
    echo "$(date): End extract and delete source-code zip file"

    echo "$(date): Start Setting access rights"
    chown -R www-data:www-data ${FolderName}_new/.
    chmod -R 775 ${FolderName}_new/.
    find ${FolderName}_new/ -type d -exec chmod 775 {} \;
    find ${FolderName}_new/ -type f -exec chmod 664 {} \;
    echo "$(date): End Setting access rights"

    # Rename folders old to new
    cd ${RootPath}
    # Rename folders
    mv ${FolderName}/ ${FolderName}_old/
    mv ${FolderName}_new/ ${FolderName}/
    rm -R ${FolderName}_old/

EOSSH
