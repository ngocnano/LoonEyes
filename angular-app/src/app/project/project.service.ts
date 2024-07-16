import { Injectable } from "@angular/core";

@Injectable()
export class ProjectService {

    project = [
        {
            id: 2,
            type: 2,
            name: 'drone light hồ tây',
            url: '/assest/image/p1.jpg'
        },
        {
            id: 3,
            type: 2,
            name: 'drone light hồ tây',
            url: '/assest/image/p2.jpg'
        },
        {
            id: 2,
            type: 1,
            name: 'Test',
            url: '/assest/image/p3.jpg'
        },
        {
            id: 3,
            type: 1,
            name: 'drone light hồ tây',
            url: '/assest/image/p4.jpg'
        },
        {
            id: 4,
            type: 3,
            name: 'drone light hồ tây',
            url: '/assest/image/p4.jpg'
        },
        {
            id: 4,
            type: 3,
            name: 'drone light hồ tây',
            url: '/assest/image/p3.jpg'
        },
        {
            id: 4,
            type: 4,
            name: 'drone light hồ tây',
            url: '/assest/image/p2.jpg'
        },
        {
            id: 4,
            type: 4,
            name: 'drone light hồ tây',
            url: '/assest/image/p1.jpg'
        },
        {
            id: 4,
            type: 4,
            name: 'drone light hồ tây',
            url: '/assest/image/p2.jpg'
        },
        {
            id: 4,
            type: 1,
            name: 'drone light hồ tây',
            url: '/assest/image/p3.jpg'
        },
        {
            id: 4,
            type: 1,
            name: 'drone light hồ tây',
            url: '/assest/image/p4.jpg'
        }
    ]

    type = [
        {
            id: null,
            name: 'TẤT CẢ'
        },
        {
            id: 1,
            name: 'DRONE PHƯỢNG HOÀNG'
        },
        {
            id: 2,
            name: 'DRONE NGOÀI TRỜI'
        },
        {
            id: 3,
            name: 'DRONE TRONG NHÀ'
        },
        {
            id: 4,
            name: 'FILM GAME'
        }
    ]
}