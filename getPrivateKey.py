# -*- coding: utf-8 -*-

def update_private_keys():
    # Open and read the contents of accounts.txt
    with open('accounts.txt', 'r', encoding='utf-8') as infile:
        lines = infile.readlines()
    
    private_keys = []
    # Loop through each line to extract the private key
    for line in lines:
        line = line.strip()
        if line.startswith("Private Key"):
            # Split the line at the colon to isolate the key
            parts = line.split(":", 1)
            if len(parts) > 1:
                key = parts[1].strip()
                private_keys.append(key)
    
    # Write the extracted private keys into privatekey.txt
    with open('privatekey.txt', 'w', encoding='utf-8') as outfile:
        for key in private_keys:
            outfile.write(key + "\n")

if __name__ == '__main__':
    update_private_keys()