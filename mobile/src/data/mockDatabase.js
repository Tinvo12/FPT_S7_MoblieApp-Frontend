import { ROLES } from '../constants/roles';

export const MOCK_DB = {
    users: [
        { id: 'c1', name: 'Nguyễn Khách Hàng', email: 'customer@test.com', role: ROLES.CUSTOMER, avatar: null },
        { id: 'm1', name: 'Phạm Quang Minh', email: 'mc@test.com', role: ROLES.MC, avatar: 'https://i.pravatar.cc/150?u=m1', isVerified: true },
        { id: 'm2', name: 'Trần Cát Tường', email: 'mc2@test.com', role: ROLES.MC, avatar: 'https://i.pravatar.cc/150?u=m2', isVerified: false },
        { id: 'a1', name: 'Admin Tổng', email: 'admin@test.com', role: ROLES.ADMIN, avatar: null },
    ],
    mcProfiles: [
        {
            id: 'p1',
            userId: 'm1',
            bio: 'Hơn 5 năm kinh nghiệm dẫn các chương trình giải trí và hội nghị cấp cao. Phong cách chững chạc, humor.',
            regions: ['Hà Nội', 'TP. HCM'],
            experienceYears: 5,
            styles: ['Trang trọng', 'Hài hước'],
            eventTypes: ['Hội nghị', 'Lễ hội âm nhạc', 'Đám cưới'],
            rates: { min: 5000000, max: 15000000 },
            status: 'AVAILABLE',
            rating: 4.8,
            reviewsCount: 24,
            responseRate: 98,
            bookingsCount: 45
        },
        {
            id: 'p2',
            userId: 'm2',
            bio: 'MC trẻ năng động, phù hợp với các sự kiện Teambuilding, sinh nhật, Year End Party.',
            regions: ['Hà Nội', 'Đà Nẵng'],
            experienceYears: 2,
            styles: ['Năng động', 'Hoạt náo'],
            eventTypes: ['Teambuilding', 'Sinh nhật', 'YEP'],
            rates: { min: 2000000, max: 5000000 },
            status: 'BUSY',
            rating: 4.2,
            reviewsCount: 8,
            responseRate: 85,
            bookingsCount: 12
        }
    ],
    bookings: [
        {
            id: 'b1',
            clientId: 'c1',
            mcId: 'm1',
            eventDate: '2026-08-25',
            startTime: '18:00',
            endTime: '22:00',
            location: 'Gem Center, TP.HCM',
            eventType: 'Hội Thảo Y Khoa Cấp Cao',
            price: 20000000,
            status: 'Pending',
            paymentStatus: 'Pending'
        },
        {
            id: 'b2',
            clientId: 'c1',
            mcId: 'm1',
            eventDate: '2026-03-12',
            startTime: '09:00',
            endTime: '12:00',
            location: 'Hà Nội',
            eventType: 'Đám Cưới',
            price: 5000000,
            status: 'Completed',
            paymentStatus: 'FullyPaid'
        }
    ],
    reviews: [
        {
            id: 'r1',
            bookingId: 'b2',
            mcId: 'm1',
            customerId: 'c1',
            rating: 5,
            comment: 'MC rất tuyệt vời, xử lý tình huống khéo léo.',
            status: 'Visible',
            createdAt: '2026-03-13T10:00:00Z'
        }
    ]
};
