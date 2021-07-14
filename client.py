#!/usr/bin/env python3
# coding:utf-8

import socket
import sys
import time

import GPUtil
import cpuinfo
import psutil
import requests
import platform

delay = 5  # send cpu data every 10 seconds
host = 'http://cdv-2.dei.uc.pt:5000'  # sever host
# host = 'http://localhost:5000'  # sever host
URL = host + '/api'
data = {}


def get_first_info():
    ip = socket.gethostbyname(socket.gethostname())  # get IP address
    data['ip'] = ip

    cpu = {}
    cpu_info = cpuinfo.get_cpu_info()
    cpu_use = psutil.cpu_percent()
    cpu['usage'] = round(cpu_use, 2)
    cpu_bits = cpu_info['bits']
    cpu['bits'] = cpu_bits
    cpu_name = cpu_info['brand_raw']
    cpu['name'] = cpu_name
    # cpu_hz = cpu_info['hz_actual_friendly']
    cpu_p_cores = psutil.cpu_count(logical=False)
    cpu['p_cores'] = cpu_p_cores
    cpu_l_cores = psutil.cpu_count(logical=True)
    cpu['l_cores'] = cpu_l_cores

    data['cpu'] = cpu

    ram = {}
    ram_info = psutil.virtual_memory()
    ram_name = platform.system() + " " + platform.release()
    ram['name'] = ram_name
    ram_usage = round(ram_info.percent, 2)
    ram['usage'] = ram_usage
    ram_total = round(ram_info.total / (1024. ** 3), 2)
    ram['total'] = ram_total

    data['ram'] = ram

    memory = {}
    memory_info = psutil.disk_usage('/')
    memory_total = round(memory_info.total / (1024.0 ** 3))
    memory['total'] = memory_total
    memory_used = round(memory_info.percent, 2)
    memory['usage'] = memory_used

    data['memory'] = memory

    GPUs = GPUtil.getGPUs()
    gpus = {}
    for GPU in GPUs:
        gpu_info = {"name": GPU.name, "usage": round(GPU.load, 2), "memory": round(GPU.memoryUsed / GPU.memoryTotal, 2)}
        gpus[GPU.id] = gpu_info

    data['gpu'] = gpus

    return data


def send_info():
    ip = socket.gethostbyname(socket.gethostname())  # get IP address
    data['ip'] = ip

    cpu_use = psutil.cpu_percent()
    data['cpu']['usage'] = round(cpu_use, 2)

    ram_info = psutil.virtual_memory()
    ram_usage = round(ram_info.percent, 2)
    data['ram']['usage'] = ram_usage

    memory_info = psutil.disk_usage('/')
    memory_used = round(memory_info.percent, 2)
    data['memory']['usage'] = memory_used

    GPUs = GPUtil.getGPUs()
    for GPU in GPUs:
        data['gpu'][GPU.id]['usage'] = round(GPU.load, 2)


def main():
    get_first_info()
    while True:
        try:
            res = requests.post(url=URL, json=data)  # post
            if res.ok:
                print('POST OK!')
        except requests.exceptions.ConnectionError:
            print(">>> Server Connection Error")
        except:
            print(">>> ", sys.exc_info()[0])

        time.sleep(delay)  # delay

        send_info()
        print(data)


if __name__ == '__main__':
    main()
