import { Injectable } from "@angular/core";

@Injectable({
      providedIn: 'root'
})
export class ProjectService {

    project = [
        {
            id: 1,
            type: 2,
            customer: 'DISTRICT',
            time: '2023',
            name: 'Show Quảng Bình',
            url: '/assest/image/project/Show Quảng Bình.JPG',
            videoId: 's7wSNv04RYw',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/project/qb/1.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qb/2.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qb/3.png',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qb/4.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qb/5.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qb/6.png',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 2,
            type: 2,
            customer: 'DISTRICT',
            time: '2023',
            name: 'Show Quảng Trị',
            url: '/assest/image/project/Show Quảng Trị.JPG',
            videoId: 'xQCwHUm3hvk',
            des: 'Mô tả dự án',
            projectDetails: [
                {
                    projectId: 1,
                    detailType: 'img',
                    url: '/assest/image/project/qt/1.jpeg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qt/2.jpeg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qt/3.jpeg',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qt/4.jpeg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qt/5.jpeg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project/qt/6.jpeg',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 3,
            type: 1,
            customer: 'DISTRICT',
            time: '2023',
            name: 'Show Vietjet',
            url: '/assest/image/project/Show Vietjet.PNG',
                        videoId: 'MAqISqbxEXg',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/p3.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p3.jpg',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 4,
            type: 1,
            customer: 'DISTRICT',
            time: '2023',
            name: 'Show Vietjet a',
            url: '/assest/image/project/Show Vietjet.PNG',
                        videoId: 'V462IsOV3js',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p3.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 5,
            type: 3,
            customer: 'DISTRICT',
            time: '2023',
            name: 'Show Bình Định',
            url: '/assest/image/project/Show Bình Định.JPG',
                        videoId: 'V462IsOV3js',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p3.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p3.jpg',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 6,
            type: 3,
            customer: 'DISTRICT',
            time: '2023',
            name: 'Show Ninh Bình',
            url: '/assest/image/project/Show Ninh bình.JPG',
                        videoId: 'V462IsOV3js',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p3.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 7,
            type: 4,
            customer: 'DISTRICT',
            time: '2023',
            name: 'drone light hồ tây',
            url: '/assest/image/p2.jpg',
                        videoId: 'V462IsOV3js',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 8,
            type: 4,
            customer: 'DISTRICT',
            time: '2023',
            name: 'drone light hồ tây',
            url: '/assest/image/p1.jpg',
                        videoId: '',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/p2.jpg',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 9,
            type: 4,
            customer: 'DISTRICT',
            time: '2023',
            name: 'drone light hồ tây',
            url: '/assest/image/p2.jpg',
                        videoId: 'V462IsOV3js',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/project4.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project4.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project2.png',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 10,
            type: 1,
            customer: 'DISTRICT',
            time: '2023',
            name: 'drone light hồ tây',
            url: '/assest/image/p3.jpg',
                        videoId: 'V462IsOV3js',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/project4.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project4.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project2.png',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        },
        {
            id: 11,
            type: 1,
            customer: 'DISTRICT',
            time: '2023',
            name: 'drone light hồ tây',
            url: '/assest/image/p4.jpg',
                        videoId: '',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            projectDetails: [
                {
                    detailType: 'img',
                    url: '/assest/image/project4.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project4.png',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'title',
                    url: 'Lorem ipsum dolor sit amet',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'text',
                    url: 'Lorem ipsum dolor sit amet consectetur. Mauris diam mattis scelerisque imperdiet odio placerat elit cras. Urna dui feugiat lacus dolor arcu ut. Risus ultrices id pellentesque lacinia turpis egestas erat. Laoreet vitae ipsum lectus leo. Accumsan nibh non et curabitur velit lectus nulla sem.',
                    nzLg: 12,
                    nzMd: 12,
                    nzSm: 24,
                    nzXs: 24
                },
                {
                    detailType: 'img',
                    url: '/assest/image/project2.png',
                    nzLg: 24,
                    nzMd: 24,
                    nzSm: 24,
                    nzXs: 24
                },
            ]
        }
    ]

    type = [
        {
            id: null,
            name: 'TẤT CẢ',
            title: '',
            des: 'Mô tả dịch vụ',
            videoId: '',
            img: '',
            icon: '/assest/logos/service_logo (2).png'
        },
        {
            id: 1,
            name: 'DRONE PHƯỢNG HOÀNG',
            title: 'Drone phượng hoàng',
            des: 'Mô tả dịch vụ',
            videoId: 'V462IsOV3js',
            img: '',
            url: '/assest/image/service/ph.mp4',
            icon: '/assest/logos/service_logo (2).png'
        },
        {
            id: 2,
            name: 'DRONE NGOÀI TRỜI',
            title: 'Drone ngoài trời',
            des: 'Mô tả dịch vụ',
            videoId: 'V462IsOV3js',
            img: '',
            url: '/assest/image/service/nt.mp4',
            icon: '/assest/logos/service_logo (2).png'
        },
        {
            id: 3,
            name: 'DRONE TRONG NHÀ',
            title: 'Drone trong nhà',
            des: 'Mô tả dịch vụ',
            videoId: 'V462IsOV3js',
            url: '/assest/image/service/tn.mp4',
            img: '',
            icon: '/assest/logos/service_logo (1).png'
        },
        {
            id: 4,
            name: 'FILM GAME',
            title: 'Drone ngoài trời',
            des: 'Mô tả dịch vụ',
            videoId: 'V462IsOV3js',
            img: '',
            icon: '/assest/logos/service_logo (1).png'
        }
    ]
}