import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  MessageCircle,
  LayoutDashboard,
  Users,
} from "lucide-react"


interface NavigationItem {
  name: string
  href?: string
  dropdown: boolean
  basePath?: string
  items?: {
    name: string
    href: string
  }[]
}


interface MobileNavProps {
  navigation: NavigationItem[]
  currentPath: string
  contactInfo: {
    phone: string
    email: string
  }
  socialLinks: {
    name: string
    href: string
    icon: string
  }[]
  quickActions: {
    name: string
    href: string
    icon: string
  }[]
}

const MobileNav: React.FC<MobileNavProps> = ({ navigation, currentPath, contactInfo, socialLinks, quickActions }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({})
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuContainerRef = useRef<HTMLDivElement>(null)

  const openMenu = () => {
    setIsOpen(true)
    document.body.classList.add("overflow-hidden")
    // Animate the menu in
    setTimeout(() => {
      if (mobileMenuContainerRef.current) {
        mobileMenuContainerRef.current.classList.remove("translate-x-full")
      }
    }, 10)
  }

  const closeMenu = () => {
    if (mobileMenuContainerRef.current) {
      mobileMenuContainerRef.current.classList.add("translate-x-full")
    }
    setTimeout(() => {
      setIsOpen(false)
      document.body.classList.remove("overflow-hidden")
    }, 300)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === mobileMenuRef.current) {
      closeMenu()
    }
  }

  // Toggle dropdown
  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const isItemActive = (item: NavigationItem) => {
    if (!item.dropdown && item.href) {
      return currentPath === item.href
    }

    if (item.dropdown && item.basePath) {
      return currentPath.startsWith(item.basePath + "/")
    }

    return false
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={openMenu}
        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Navigation Menu */}
      <div ref={mobileMenuRef} className={`fixed inset-0 z-40 ${isOpen ? "" : "hidden"}`} onClick={handleBackdropClick}>
        <div className="fixed inset-0 bg-black/70"></div>
        <div
          ref={mobileMenuContainerRef}
          className="fixed inset-y-0 right-0 max-w-60 w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out translate-x-full font-inter"
        >
          <div className="flex items-center justify-between p-4 border-b-2 border-gray-200 bg-blue-900">
            <h2 className="text-lg font-medium text-gray-50">Menu</h2>
            <button onClick={closeMenu} className="p-2 rounded-md text-gray-100">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-3 py-5 h-full overflow-y-auto">
            <div className="space-y-1">
              {navigation.map((item, index) => (
                <div key={index}>
                  {!item.dropdown ? (
                    <a
                      href={item.href}
                      className={`block px-3.5 py-2 rounded-md text-base font-medium ${currentPath === item.href
                          ? "bg-primarylight text-primarydark font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <div className="mobile-dropdown">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${isItemActive(item)
                            ? "bg-primarylight text-primarydark"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transform transition-transform duration-200 ${openDropdowns[item.name] ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <div className={`px-4 space-y-1 my-2 bg ${openDropdowns[item.name] ? "" : "hidden"}`}>
                        {item.items?.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className={`block px-3 py-2 rounded-md text-sm ${currentPath === subItem.href
                                ? "bg-secondarylight text-secondarydark font-medium"
                                : "text-gray-600 bg-gray-100 hover:text-gray-900"
                              }`}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Quick Actions */}
            <div className="mt-8 pt-4 border-t border-gray-200 font-inter">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Actions</h3>
              <div className="mt-2 space-y-1">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {action.icon === "credit-card" && <CreditCard className="h-5 w-5 mr-3 text-gray-400" />}
                    {action.icon === "message-circle" && <MessageCircle className="h-5 w-5 mr-3 text-gray-400" />}
                    {action.icon === "layout-dashboard" && <LayoutDashboard className="h-5 w-5 mr-3 text-gray-400" />}
                    {action.icon === "users" && <Users className="h-5 w-5 mr-3 text-gray-400" />}
                    {action.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Follow Us</h3>
              <div className="mt-2 px-3 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500"
                    aria-label={social.name}
                  >
                    {social.icon === "facebook" && <Facebook className="h-6 w-6" />}
                    {social.icon === "twitter" && <Twitter className="h-6 w-6" />}
                    {social.icon === "instagram" && <Instagram className="h-6 w-6" />}
                    {social.icon === "youtube" && <Youtube className="h-6 w-6" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav