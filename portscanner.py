#! /usr/bin/python3

import socket

s =socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host =input ("enter your host ip :  ")
port =int (input ("enter the port number to scan : "))

def port_scanner(port):
    if s.connect_ex((host,port)):
        print("the port is open")
    elif port:
          port= int(input("try another port number :") )
          print ("the port is closed")
    else:
        print("the port is closed")
port_scanner(port)